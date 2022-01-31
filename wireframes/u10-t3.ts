// https://stackoverflow.com/a/51514813
const splitToChunks = (array: Array<string>, parts: number): string[][] => {
    const result: string[][] = [];
    for (let i: number = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

// ---------- manual data as fallback ----------
const manualValues = [
    916331,
    1228890,
    295379,
    205223,
    41843,
    120775,
    439836,
    82351,
    402098,
    1256199,
    253792,
    67084,
    575742,
    188277,
    103432,
    246268
]

// ---------- automatic data aquiring ----------
const page: Response = await fetch("https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html");
const pageContent: string = await page.text();

const table: string = pageContent.split("<table>")[1].split("</table>")[0];
const tableBody: string = table.split("<tbody>")[1].split("</tbody>")[0];
let rawValues: Array<string> = tableBody.split("<td class=\"right\" colspan=\"1\" rowspan=\"1\">");
rawValues = rawValues.slice(1, rawValues.length);
const rawValuesChunks: string[][] = splitToChunks(rawValues, 17).slice(0, rawValues.length-1);

const values: Array<number> = rawValuesChunks.map(chunk =>
    parseInt(chunk[0]
        .split("<")[0]
        .split(".")
        .reduce((a, b) => `${a}${b}`
        )
    )
)

const getMin = (values: Array<number>): number => Math.min(...values);
const getMax = (values: Array<number>): number => Math.max(...values);
const getSum = (values: Array<number>): number => values.reduce((a, b) => a+b);
const getAvg = (values: Array<number>, sum: number): number => Math.floor(sum/values.length);

const renderMin = (): number => getMin(values) || getMin(manualValues);
const renderMax = (): number => getMax(values) || getMax(manualValues);
const renderSum = (): number => getSum(values) || getSum(manualValues);
const renderAvg = (): number =>
    getAvg(values, getSum(values)) ||
    getAvg(manualValues, getSum(manualValues));

const getTitle = ():string => {
    const title: string = pageContent.split("Stand: ")[1].split("(")[0];

    return `Stand: ${title}`
}

const content: string =
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"><title>10.3. TypeScript auf Deno(5 Punkte)</title>
        <style>
            html {
                font-family: Helvetica Neue, serif;
                font-size: 30px;
            }
            body {
                margin: 0;
            }
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
            }
            .mainContentWrapper {
                row-gap: 48px;
                margin: 64px;
                width: 900px;
            }
            .contentWrapper {
                row-gap: 24px;
            }
            #title {
                font-weight: bold;
                font-size: 50px;
                border-bottom: 8px solid red;
                padding-bottom: 4px;
            }
            #subTitle {
                font-weight: bold;
            }
            .valueWrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 500px;
            }
        </style>
    </head>
    <body>
    <div class="mainContentWrapper container">
        <div id="title">COVID-19-Fallzahlen in Deutschland</div>
    
        <div class="contentWrapper container">
            <div id="subTitle">${getTitle()}</div>
            
            <div class="valueWrapper">
                <div>Minimum:</div>
                <div>${renderMin()}</div>
            </div>
            
            <div class="valueWrapper">
                <div>Maximum:</div>
                <div>${renderMax()}</div>
            </div>
            
            <div class="valueWrapper">
                <div>Durchschnitt:</div>
                <div>${renderAvg()}</div>
            </div>
            
            <div class="valueWrapper">
                <div>Summe:</div>
                <div>${renderSum()}</div>
            </div>
        </div>
    </div>
    </body>
    </html>
    `

const renderContent = (): Uint8Array => new TextEncoder().encode(content);

// https://deno.land/manual@v1.16.4/getting_started/first_steps#making-an-http-request
// Start listening on port 8080 of localhost.
const server:  Deno.Listener = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

// Connections to the server will be yielded up as an async iterable.
for await (const conn: Deno.Conn of server) {
    // In order to not be blocking, we need to handle each connection individually
    // without awaiting the function
    serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
    // This "upgrades" a network connection into an HTTP connection.
    const httpConn: Deno.HttpConn = Deno.serveHttp(conn);
    // Each request sent over the HTTP connection will be yielded as an async
    // iterator from the HTTP connection.
    for await (const requestEvent of httpConn) {
        // The native HTTP server uses the web standard `Request` and `Response`
        // objects.

        // The requestEvent's `.respondWith()` method is how we send the response
        // back to the client.
        requestEvent.respondWith(
            new Response(renderContent(), {
                status: 200,
            }),
        );
    }
}
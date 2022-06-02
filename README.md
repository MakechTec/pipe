# Pipe #

Usage:

    let content = "";

    let pipe = new Pipe(content);

    let newContent = new Pipe(content)
                    .addAction( (content, additonalParam) => {
                        return content + additionalParam;
                    }, "additonal param value " )
                    .addAction( (content, additonalParam) => {
                        return content + additionalParam;
                    }, "additonal param2 value " )
                    .addAction( (content, additonalParam) => {
                        return content + additionalParam;
                    }, "additonal param3 value " )
                    .execActions();

    console.log(newContent);

Result:

    additonal param1 value additonal param2 value additonal param3 value

the core of a pipe is apply multiple actions to an element.
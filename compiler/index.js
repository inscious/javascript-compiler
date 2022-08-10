function tokenizer(input) {
    // value used to track current position in the code
    let current = 0;
    // array used to push tokens to
    let tokens = [];
    // while loop used to set up current var to be incremented to any length.
    // current value could be any length of tokens
    while (current < input.length) {
        // storing current character in the input
        let char = input[current];
        // checking for an open parenthesis later to be "CallExpression",
        // if opening parenthesis is available, new token gets pushed
        // with type "paren" with value set to an open parenthesis.
        if (char === "(") {
            tokens.push({
                type: "paren",
                value: "(",
            });
            // increment current
            current++;
            //next cycle of the loop
            continue;
        }
        // checks for closing parenthesis, adds new token
        // increments current, continues
        if (char === ")") {
            tokens.push({
                type: "paren",
                value: ")",
            });
            current++;
            continue;
        }
        // checking for white space that is not stored as a token,
        // or is later removed but not important
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }
        // this token is a type of number, checks for any tyoe of number
        // captures entire sequence of characters as one token
        let NUMBERS = /{0-9}/;
        if (NUMBERS.test(char)) {
            // variable used to push characters to
            let value = "";
            // looping through ecah character until a a character is
            // encountered that is not anumber, pushing each character
            // that is a number into value variable
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            // push number into tokens array
            tokens.push({ type: "number", value });
            continue;
        }
        
    }
}

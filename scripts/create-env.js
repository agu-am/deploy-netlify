const fs = require("fs");

fs.writeFileSync("./.env", "API=${preocess.env.API}\n");

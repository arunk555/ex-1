const winston = require("winston");
const path = require("path");
/* Log severity levels */
const levels = {
    'error': 0,
    'warn': 1,
    'info': 2,
    'http': 3,
    'debug': 4
}

const colors = {
    'error': 'red',
    'warn': 'yellow',
    'info': 'green',
    'http': 'magenta',
    'debug': 'white'
}

winston.addColors(colors);

const level = ()=>{
    const env= process.env.NODE_ENV || 'development';
    const isdev= env === 'development';
    return isdev ? 'debug' : 'warn';
}

const label_format = winston.format.label({
    label: path.basename(require.main.filename)
});

const timestamp_format= winston.format.timestamp({
    format: 'YYYY-MM-SS HH:mm:ss:ms'
});

const print_format = winston.format.printf((info)=>{
    console.log(info);
    return `${info.timestamp} - ${info.level} [${info.label}] ${info.message}`;
});

const format = winston.format.combine(label_format, timestamp_format, print_format);

const tport_console = new winston.transports.Console({
    format: winston.format.colorize({
        all: true
    })
});

const tport_err_file = new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error'
});

const tport_all_file = new winston.transports.File({
    filename: 'logs/all.log'
});

const transports = [tport_console, tport_err_file, tport_all_file];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});
module.exports = logger;


interface ILogLine<T> {
    timeStamp: Date,
    data: T
}


const logLine: ILogLine<{st: string}> = {
    timeStamp : new Date(),
    data: {
        st: 'ds'
    }
}
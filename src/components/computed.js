export const timeStopwatch = (time, format) =>{
    format.current = 0
    const hr = Math.floor((time / (100 * 60 * 60)) % 60);
    const min = Math.floor((time / (100 * 60)) % 60)
    const sc = Math.floor((time / 100) % 60)
    const msc = time % 100

    const units = [hr, min, sc, msc]
    format.current = units.map((i) => `0${i}`.slice(-2)).join(':')

      
    return format.current
}
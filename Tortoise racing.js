function race(v1, v2, g) {
    if (v1 < 0 || v2 < 0 || g < 0) {
        return null;
    }
    if (v1 >= v2) {
        return null;
    }
    let relativeSpeed = v2-v1;
    let timeHours = g / relativeSpeed
    let totalSeconds = timeHours * 3600;
    hours = totalSeconds / 3600
    minutes = (totalSeconds % 3600) / 60
    seconds = totalSeconds % 60
    return [Math.floor(hours), Math.floor(minutes), Math.floor(seconds)];
}

race(720, 850, 70)
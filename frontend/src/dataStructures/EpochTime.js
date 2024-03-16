function epochToDate(epoch) {
    // Ensure the function can handle epoch in milliseconds correctly
    const date = new Date(epoch);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
}
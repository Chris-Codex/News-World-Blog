

export default getDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const currentDate = month + '/' + day + '/' + year
    console.log();
}


fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
    console.log(res.json())
);

fetch("https://api.randomuser.me/?nat=US&results=1")
.then(res => res.json())
.then(json => json.results)
.then(console.log)
.catch(console.error);

const getFakePerson = async () => {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
};
getFakePerson();

const getFakePerson2 = async () => {
    try {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
        let { results } = res.json();
        console.log(results);
    } catch (error) {
        console.error(error);
    }
};
getFakePerson2();

const getPeople = count =>
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>
            request.status === 200
            ? resolves(JSON.parse(request.response).results)
            : reject(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
});
getPeople(5).then(members => console.log(members)).catch(error => console.error(`getPeople failed: ${error.message}`));
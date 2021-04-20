
    async function fetchFunction(apiurl,cardlist) {
        let loginData = await fetch(apiurl)
            .then((response) => response.json())
            .then(data => {
                cardlist.push(data.articles)
                return data;
            });

        // this.setState({
        //     cardlist
        // })
        return {
            payload: loginData.articles
        }


    }

    module.exports =fetchFunction;

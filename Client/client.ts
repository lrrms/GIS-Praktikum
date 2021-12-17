
namespace Client {
    console.log("Client läuft");

    const url: string = "http://127.0.0.1:3000"; 
    const path: string = "/convertDate";

    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");

    sendButton.addEventListener("click", function (evt: Event) {
        evt.preventDefault();
        sendForm();
    });

    console.log(myForm, sendButton);

    async function sendForm(): Promise<void> {
        let formData: FormData = new FormData(myForm);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + path + "?" + query.toString();
        console.log(urlWithQuery);

        let response: Response = await fetch(urlWithQuery);
        let responseText: string = await response.text();
        console.log(responseText); 
    }
    //dom ? 
}
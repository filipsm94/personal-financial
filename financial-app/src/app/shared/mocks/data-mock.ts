export class DataMock {

    public static get GET_MOCK_LOGIN(){
        return {
            login: {
                authenticated: true,
                clientId: "XXX222XXX",
                name: "Felipe Mesa",
                email: "felipe@mesa.com"
            }
        }
    }
}
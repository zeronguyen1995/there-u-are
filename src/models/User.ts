export default interface IUser {
    id: string,
    email: string,
    name: string,
    photoUrl: string,
    phone : string
    location: {lat : number, long: number}
}
import './FormAddress.css'

export default function FormAddress() {

    return (
        <>
            <h3>Form address</h3>
            <form action="" className="formAddress">
                <label>Country:
                    <input type="text"/>
                </label>
                <label>City:
                    <input type="text"/>
                </label>
                <label>Street:
                    <input type="text"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
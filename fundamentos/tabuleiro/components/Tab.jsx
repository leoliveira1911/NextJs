import Line from "./Line";

export default function Tab() {
    return (
        <div style={{
            display: "flex",
            height: '100vh',
            backgroundColor: 'gray',
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                height: 800,
                width: 800,
                backgroundColor: 'black'
            }}>
                <Line par/>
                <Line />
                <Line par/>
                <Line />
                <Line par/>
                <Line />
                <Line par/>
                <Line />
            </div>
        </div>
    )
}
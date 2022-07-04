export default function Line(props) {
    
    return props.par? (
        <div style={{
            display: "flex",
            width: 800,
            height: 100,
            backgroundColor:'white'
        }}>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div> 
        </div>
    ) : (
        <div style={{
            display: "flex",
            width: 800,
            height: 100,
            backgroundColor:'white'
        }}>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'black'}}></div>
            <div style={{width: 100,height: 100,backgroundColor:'white'}}></div>
           
        </div>
    )

}
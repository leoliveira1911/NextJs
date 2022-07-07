import styles from '../styles/Door.module.css'
import DoorModel from '../model/doorModel'
import Gift from './Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value

    const selected = door.selected && !door.open ? styles.selected : ''

    const switchSelection = e => props.onChange(door.switchSelection())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.toOpen())
    }

    function renderDoor() {
        return (

            <div className={styles.door}>
                <div className={styles.number}> {door.number} </div>
                <div className={styles.knob} onClick={open}></div>
            </div>

        )
    }

    return (
        <div className={styles.area} onClick={switchSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.closed ? renderDoor() : door.hasGift ? <Gift></Gift> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
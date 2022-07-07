import DoorModel from '../model/doorModel'
export function createDoors (num: number, selected: number): DoorModel[] {
    return Array.from( { length: num} , (_ , i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number , hasGift)
    })
}
export function attDoors(doors : DoorModel[] , modified: DoorModel): DoorModel[] {
    return doors.map(door => {
        const isTheModified = door.number === modified.number
        
        if(isTheModified) {
            return modified
        } else {
            return modified.open? door : door.unSelect()
        }
    })
}
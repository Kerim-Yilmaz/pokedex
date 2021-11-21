


export function progressBarbg(str){
    switch (str) {
        case 'hp':
        return 'warning'
        case 'attack':
        return 'primary'
        case 'defense':
        return 'dark'
        case 'special-attack':
        return 'info'
        case 'special-defense':
        return 'secondary'
        case 'speed':
        return 'success'
        default:
          return 'light'
    }
}


export function bagdeBg (str){
  switch (str) {
      case 1:
      return 'danger'
      case 2:
      return 'primary'
      case 3:
      return 'secondary'
      default :
        return 'warning'
  }

}
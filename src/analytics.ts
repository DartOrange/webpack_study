import $ from 'jquery'

function createAnalytics(): object{
    let counter = 0
    let is_destroyed: boolean = false

    const listener = (): number => counter++

    $(document).on('click', listener)

    return {
        destroy(){
            $(document).off('click', listener)
            is_destroyed = true
        },

        getClicks(){
            if(is_destroyed){
                counter = 0
                return 'analytics is killed'
            } 
            return counter
        }
    }
}

window['analytics'] = createAnalytics()
export default {
    isHc: (props: { mode: string; parent: any; }) => props.mode !== 'vertical' && props.parent,
    toggle: (toggled: any, duration = 300) => ({
        animation: { 
                rotateX: toggled ? 0 : 180, 
                opacity: [1, 0]
            },
        duration: duration,
    }),
    drawer: (props: any) => {
    return {
            enter: {
            animation: props.isHc ? 'slideLeft' :'slideDown',
            duration: props.duration || 200
            },
            leave: {
                animation: props.isHc ? 'slideRight' : 'slideUp',
                duration: props.duration || 200
            }
        }
    }
};

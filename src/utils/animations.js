export const animateWithGsapTimeLine = (
    timeline,
    rotationRef,
    rotationState,
    firstTarget,
    secondTarget,
    animationProps,
) => {
    timeline.to(rotationRef.current.rotation,{
        y:rotationState,
        duration:1,
        ease:'power2.inOut',
    })
    
    timeline.to(firstTarget,{
        ...animationProps,
        ease:'power2.inOut',
    },
'<'

// This symbolizes to insert the animation at start of the previous animation
)
    
    timeline.to(secondTarget,{
        ...animationProps,
        ease:'power2.inOut',
    },
'<'

// This symbolizes to insert the animation at start of the previous animation
)
};

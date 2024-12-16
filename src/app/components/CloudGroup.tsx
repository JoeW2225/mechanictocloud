import cloudAni from '../styles/cloudAni.module.css'

export default function CloudGroup() {
    return(
        
    <div className={cloudAni.backgroundWrap}>
        <div className={cloudAni.x1}>
            <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x2}>
            <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x3}>
            <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x4}>
            <div className={cloudAni.cloud}></div>
        </div>

        <div className={cloudAni.x5}>
            <div className={cloudAni.cloud}></div>
        </div>
    </div>
    
    )
}
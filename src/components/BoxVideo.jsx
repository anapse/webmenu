export default function VideoBox() {
    return (
        <div className="video-box">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/tv?is_account_switch=1&hrld=1#/"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    )
}

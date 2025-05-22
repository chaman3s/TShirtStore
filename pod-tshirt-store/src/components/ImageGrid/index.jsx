export default function ImageGrid({ data, Styles = {} }) {
    if (!data || !Array.isArray(data.images)) {
        return <div>No images to display</div>;
    }

    const containerStyle = Styles.con || {};
    const titleStyle = Styles.title || {};
    const imageWrapperStyle = Styles.Div || {};
    const figureStyle = Styles.figure || {};
    const allImgStyle = Styles.allImg || {};
    const imgStyles = Styles.img || [];

    return (
        <div style={{ ...containerStyle }}>
            <h1 style={{ ...titleStyle }}>{data.title}</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2px",
                    overflowX: "auto",
                    scrollbarWidth: "none",         // Firefox
                    msOverflowStyle: "none",         // IE/Edge
                    ...imageWrapperStyle,
                }}
            >
                {data.images.map((ele, index) => (
                    <figure key={index} style={{ margin: "2px", ...figureStyle }}>
                        <img
                            src={ele}
                            alt={`image-${index}`}
                            style={{ ...allImgStyle, ...(imgStyles[index] || {}) }}
                        />
                    </figure>
                ))}
            </div>
        </div>
    );
}

function Title({ title, textAlign, fontSize, fontWeight, textTransform, marginLeft, marginTop }) {
    return (
        <>
            <p
                style={{
                    textAlign: textAlign,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    textTransform: textTransform,
                    marginLeft: marginLeft,
                    marginTop: marginTop,
                }}
            >
                {title}
            </p>
        </>
    );
}

export default Title;

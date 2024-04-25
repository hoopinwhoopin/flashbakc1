function BlogCard({ title, subTitle, tags, imgSrc }) {
    return (
        <div className=" w-full my-14">
            <img src={imgSrc} alt={title} className=" mb-7" />
            <p className=" text-[40px] my-3 leading-8 text-white">
                {title}
            </p>
            <p className=" Courier text-[18px] leading-3 text-[#848280]">
                {subTitle}
            </p>
            <p className=" Courier text-[18px] text-[#848280]">
                {tags}
            </p>
        </div>
    )
}

export default BlogCard
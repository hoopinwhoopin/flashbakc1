import blogImage from '../assets/images/blog.svg'
import Blog1 from '../assets/images/blog1.svg'
import Blog2 from '../assets/images/blog2.svg'
import Blog3 from '../assets/images/blog3.svg'
import Blog4 from '../assets/images/blog4.svg'
import BlogCard from '../components/BlogCard'

function BlogPage () {
    return (
        <>
        <img src={blogImage} alt="Blog" />
        <div className=' bg-[#322e2b] grid-cols-[20%,60%,20%] grid'>
            <div />
            <div className=' mt-20 mb-20'>
                <div className='grid grid-cols-3 text-white gap-3 mb-20'>
                    <div className=' flex flex-col gap-2 text-[50px] leading-9'>
                        <span >RAHUL <span className=' text-[#ffca00]'> &amp;</span></span>
                        <p>FABIAN&rsquo;S</p>
                        <p className=' text-[#ffca00] ml-auto'>experiences</p>
                    </div>
                    <div className=' Courier text-[23px] text-[#857c6e]'>
                    Rahul D&apos;Souza and Fabian Franco, both seasoned photographers with a shared passion for capturing love stories, eagerly anticipate sharing their diverse experiences in photographing weddings of all kinds.
                    </div>
                    <div className=' Courier text-[23px] text-[#857c6e]'>
                    From the tears of joy exchanged in intimate backyard ceremonies to the exhilarating dance floors of grand destination extravaganzas, they&apos;ve experienced the full gamut of wedding celebrations.
                    </div>
                </div>
                <div>
                    <BlogCard title='The Wedding of the Year' subTitle='2 min read  |  March 21, 2024  |  Goa' tags='Tags: wedding, destination, photography, blog, experimental' imgSrc={Blog1} />
                    <BlogCard title='A Backyard Affair' subTitle='2 min read  |  March 21, 2024  |  Goa' tags='Tags: wedding, destination, photography, blog, experimental' imgSrc={Blog2} />
                    <BlogCard title='The Dance Floor Chronicles' subTitle='2 min read  |  March 21, 2024  |  Goa' tags='Tags: wedding, destination, photography, blog, experimental' imgSrc={Blog3} />
                    <BlogCard title='The Tears of Joy' subTitle='2 min read  |  March 21, 2024  |  Goa' tags='Tags: wedding, destination, photography, blog, experimental' imgSrc={Blog4} />
                </div>
            </div>
            <div />
        </div>
        </>
    )
}

export default BlogPage
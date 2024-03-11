import { BlogCard } from '../components/BlogCard';
import { useBlogs } from '../hooks';
export function Blogs() {
	const { blogs, loading } = useBlogs();

	if (loading) return <div>Loading</div>;
	return (
		<div className="px-6 flex justify-center flex-col items-center mx-auto max-w-2xl">
			<BlogCard
				authorName="Shivam Dhaka"
				title="How an ugly single page website makes 5000 dollars a month with Affiliate Marketing"
				content="Blog 1 Content    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat."
				publishedDate="Dec 3,2022"
			></BlogCard>
			<BlogCard
				authorName="Shivam Dhaka"
				title="How an ugly single page website makes 5000 dollars a month with Affiliate Marketing"
				content="Blog 1 Content    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat."
				publishedDate="Dec 3,2022"
			></BlogCard>
			<BlogCard
				authorName="Shivam Dhaka"
				title="How an ugly single page website makes 5000 dollars a month with Affiliate Marketing"
				content="Blog 1 Content    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat.   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur delectus quia numquam cupiditate eius quos quibusdam aliquid hic repellendus dolorem minima placeat quas iste, est iure saepe officia quaerat."
				publishedDate="Dec 3,2022"
			></BlogCard>
		</div>
	);
}

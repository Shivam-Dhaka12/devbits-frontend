import { Form } from '../components/AuthForm';
import { Quote } from '../components/Quote';

export function Signin() {
	return (
		<div className="lg:grid lg:grid-cols-2">
			<div className="col-span-1">
				<Form type="signin" />
			</div>
			<div className="col-span-1 hidden lg:block">
				<Quote />
			</div>
		</div>
	);
}

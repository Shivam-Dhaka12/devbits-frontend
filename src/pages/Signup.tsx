import { Quote } from '../components/Quote';
import { Form } from '../components/AuthForm';

export function Signup() {
	return (
		<div className="lg:grid lg:grid-cols-2">
			<div className="col-span-1">
				<Form type="signup" />
			</div>
			<div className="col-span-1 hidden lg:block">
				<Quote />
			</div>
		</div>
	);
}

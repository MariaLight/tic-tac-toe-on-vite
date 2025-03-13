import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';


export const AppLayout = () => {

  return (
    <div className="pt-12 flex flex-col items-center">
      <Field />
      <Information />

    </div>
  );
}
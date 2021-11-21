import SingleProduct from '../../components/SingleProduct';

export default function SingeProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}

import { Home } from "../pages/Home";


export type Charts = 'home' | 'sample-card';


type AppFormFactoryProps = {
  page: Charts;
};


export function AppFormFactory({ page }: AppFormFactoryProps) {
  return (
    <ComponentFactory page={page} />
  )
};




function ComponentFactory({ page }: AppFormFactoryProps) {
  switch (page) {
  case 'sample-card':
    return <div>temp</div>;

  case 'home':
  default:
    return <Home />;
  }
}

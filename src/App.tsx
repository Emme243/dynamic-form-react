import InputSidebar from './components/InputSidebar';
import DynamicFormView from './components/DynamicFormView';

function App() {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-4xl font-bold">Formulario dinámico con React</h1>
      <hr className="my-5" />

      <div className="flex">
        <InputSidebar />
        <DynamicFormView />
      </div>
    </div>
  );
}

export default App;

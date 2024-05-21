import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to UI Kitten</Text>
        <Button>HOME</Button>
      </Layout>
    </ApplicationProvider>
  );
}


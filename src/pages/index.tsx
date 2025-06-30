import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomeSection from '../components/homepage/HomeSection';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).difyChatbotConfig = {
                token: 'YOUR_TOKEN',
                baseUrl: 'https://udify.app',
                draggable: true,
                dragAxis: 'both',
                containerProps: {
                    style: {
                        backgroundColor: '#0f62fe',
                        width: '60px',
                        height: '60px',
                        borderRadius: '30px',
                    },
                },
            };
        }
    }, []);
  return (
    <Layout
      title="Apache BifroMQ (Incubating)"
      description={`${siteConfig.tagline}`}
    >
      <div className='dark:text-gray-100 text-gray-500'>
          <HomeSection />
          <HomeFooter />
        </div>
    </Layout>
  );
}

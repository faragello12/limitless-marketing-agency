import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './pages/AboutUs';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import MediaBuying from './pages/MediaBuying';
import WebsiteCreation from './pages/WebsiteCreation';
import InfluencerCampaigns from './pages/InfluencerCampaigns';
import ContactUs from './pages/ContactUs';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/social-media" element={<SocialMediaMarketing />} />
        <Route path="/media-buying" element={<MediaBuying />} />
        <Route path="/website-creation" element={<WebsiteCreation />} />
        <Route path="/influencer-campaigns" element={<InfluencerCampaigns />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
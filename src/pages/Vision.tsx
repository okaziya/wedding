
import { Card, CardContent } from "@/components/ui/card";

const Vision = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-wedding-background">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-merriweather text-wedding-accent text-center mb-8">Vision & Mission</h1>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4">
              <span className="font-bold">Our vision for this event</span> is to gather our closest family and friends to celebrate our deep commitment to building the future together as a couple. We celebrate Faith, Loyalty, and Unending Dedication to overcoming life's challenges until they're finished, one day at a time.
            </p>
            
            <p className="mb-6">
              <span className="font-bold">The mission for this event</span> is to create a meet-and-greet for our close friends and family. The location is set to Mats' home village, where his ancestors lived and thrived for generations. We hope you will enjoy the peaceful atmosphere, the closeness to nature and God's blessings over all of us.
            </p>
            
            <div>
              <p className="font-bold mb-2">What to expect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Out-doorsy activities and fun</li>
                <li>Healthy and tasty foods</li>
                <li>Kindness and respect for our differences</li>
                <li>No drugs/alcohol</li>
                <li>Child-friendly atmosphere</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Vision;

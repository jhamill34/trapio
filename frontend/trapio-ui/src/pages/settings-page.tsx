import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const SettingsMainPage: React.FC = () => {
  return (
    <div className="grid gap-6">
      <Card className="bg-background">
        <CardHeader>
          <CardTitle>Store Name*</CardTitle>
          <CardDescription>
            <p>Used to identify your store in the marketplace.</p>
            <p className="text-xs italic mt-2">
              *This is temporary, will remove once we know what settings to
              actually put here.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Store Name" />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

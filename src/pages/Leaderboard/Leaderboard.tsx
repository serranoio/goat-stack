import ProfileCard from '@/components/shared/ProfileCard/ProfileCard';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import MePic from '../../../public/me.webp';

export default function Leaderboard() {
  const content = (
    <div className="flex flex-col justify-center">
      <p>David Serrano</p>
      <div className="flex gap-2 justify-between">
        <p>🌟</p>
        <p>389</p>
      </div>
    </div>
  );
  return (
    <main className="flex flex-col justify-between mx-auto  px-4 sm:px-6 lg:px-8 pt-24 min-h-screen">
      <a className="absolute large top-4 left-4 text-primary">&larr;</a>
      <ProfileCard
        imageURL={MePic}
        imageAlt="David Serrano"
        imageContent={content}
        name="David Serrano"
      />
      <div>
        <h1 className="text-center text-primary h1">Leaderboard</h1>
        <div>
          <h3>Your stats: </h3>
        </div>
      </div>
      <Table>
        <TableCaption>List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div></div>
    </main>
  );
}


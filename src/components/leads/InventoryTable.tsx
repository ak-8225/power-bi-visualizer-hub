
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInventoryData } from "@/data/leadsData";
import { Box, Package, ShoppingCart } from "lucide-react";

const InventoryTable = () => {
  const inventoryData = getInventoryData();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Stock':
        return <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">In Stock</Badge>;
      case 'Low Stock':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Low Stock</Badge>;
      case 'Out of Stock':
        return <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">Out of Stock</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hardware':
        return <Box className="h-4 w-4" />;
      case 'Software':
        return <ShoppingCart className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Inventory Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{item.stock}</TableCell>
                <TableCell className="text-right">
                  {getStatusBadge(item.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InventoryTable;

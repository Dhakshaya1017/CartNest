-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2026 at 07:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cartnest_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'Admin', 'admin@cartnest.com', 'admin123', '2026-08-01 20:13:24');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `quantity`, `created_at`) VALUES
(7, 3, 53, 1, '2026-08-06 03:04:20'),
(8, 3, 36, 1, '2026-08-06 03:11:36');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'Footwear', '2026-08-04 04:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_status` varchar(50) DEFAULT 'Pending',
  `status` enum('Pending','Confirmed','Shipped','Delivered','Cancelled') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_amount`, `payment_method`, `payment_status`, `status`, `created_at`) VALUES
(1, 1, 9998.00, NULL, 'Pending', 'Pending', '2026-08-04 03:55:49'),
(2, 4, 34998.00, NULL, 'Pending', 'Pending', '2026-08-05 01:48:41'),
(3, 4, 34998.00, 'Cash on Delivery', 'Pending', 'Pending', '2026-08-05 02:13:03'),
(4, 4, 34998.00, 'UPI', 'Paid', 'Pending', '2026-08-05 02:13:25');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category`, `image`, `stock`, `created_at`) VALUES
(5, 'Classic Denim Jacket', 'Stylish blue denim jacket perfect for casual everyday fashion.', 2499.00, 'Men', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', 18, '2026-08-05 08:50:33'),
(6, 'Premium Cotton Shirt', 'Comfortable slim fit cotton shirt for office and casual wear.', 1599.00, 'Men', 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600', 30, '2026-08-05 08:50:33'),
(7, 'Women Floral Dress', 'Elegant floral summer dress with premium fabric and stylish look.', 2299.00, 'Women', 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600', 15, '2026-08-05 08:50:33'),
(8, 'Women Handbag', 'Luxury handbag with spacious design for everyday use.', 1899.00, 'Women', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600', 20, '2026-08-05 08:50:33'),
(9, 'Beauty Face Serum', 'Vitamin C face serum for glowing and healthy skin.', 899.00, 'Beauty', 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600', 12, '2026-08-05 08:50:33'),
(10, 'Matte Lipstick Set', 'Long lasting matte lipstick collection with multiple shades.', 799.00, 'Beauty', 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600', 35, '2026-08-05 08:50:33'),
(11, 'Wireless Headphones', 'Noise cancellation headphones with powerful bass and long battery.', 2999.00, 'Electronics', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', 40, '2026-08-05 08:50:33'),
(12, 'Smart Watch', 'Fitness tracking smartwatch with modern display.', 3499.00, 'Electronics', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', 22, '2026-08-05 08:50:33'),
(13, 'Luxury Wall Painting', 'Modern abstract wall art to enhance your home interior.', 1499.00, 'Home & Living', 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600', 10, '2026-08-05 08:50:33'),
(14, 'Men Formal Blazer', 'Premium slim fit blazer for office meetings and special occasions.', 4999.00, 'Men', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600', 8, '2026-08-05 08:51:02'),
(15, 'Men Casual Sneakers', 'Comfortable everyday sneakers with modern street style.', 1999.00, 'Men', 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600', 28, '2026-08-05 08:51:02'),
(16, 'Women Ethnic Kurta Set', 'Elegant traditional kurta set with beautiful embroidery.', 2799.00, 'Women', 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600', 14, '2026-08-05 08:51:02'),
(17, 'Women Designer Saree', 'Premium designer saree for festive occasions.', 3999.00, 'Women', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600', 6, '2026-08-05 08:51:02'),
(18, 'Premium Perfume', 'Long lasting luxury fragrance for daily and special occasions.', 1599.00, 'Beauty', 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600', 20, '2026-08-05 08:51:02'),
(19, 'Makeup Brush Kit', 'Professional makeup brush set with soft bristles.', 999.00, 'Beauty', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600', 25, '2026-08-05 08:51:02'),
(20, 'Bluetooth Speaker', 'Portable wireless speaker with clear sound quality.', 2199.00, 'Electronics', 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600', 18, '2026-08-05 08:51:02'),
(21, 'Mechanical Keyboard', 'RGB mechanical keyboard for work and gaming setup.', 3499.00, 'Electronics', 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600', 15, '2026-08-05 08:51:02'),
(22, 'Modern Table Lamp', 'Stylish decorative lamp for bedroom and living room.', 1299.00, 'Home & Living', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600', 9, '2026-08-05 08:51:02'),
(23, 'Luxury Cushion Set', 'Premium soft cushions to upgrade your home interiors.', 799.00, 'Home & Living', 'https://images.unsplash.com/photo-1584100936595-c0654b55a228?w=600', 16, '2026-08-05 08:51:02'),
(24, 'Luxury Leather Watch', 'Premium classic watch with elegant design for everyday style.', 4999.00, 'Accessories', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600', 12, '2026-08-05 08:52:08'),
(25, 'Designer Handbag', 'Stylish handbag with premium finish and spacious compartments.', 2999.00, 'Accessories', 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600', 18, '2026-08-05 08:52:08'),
(26, 'Wireless Earbuds', 'Compact earbuds with clear audio and long battery backup.', 1799.00, 'Electronics', 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600', 30, '2026-08-05 08:52:08'),
(27, 'Smartphone Pro Max', 'Latest smartphone with powerful processor and premium camera.', 54999.00, 'Electronics', 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600', 7, '2026-08-05 08:52:08'),
(28, 'Modern Sofa Set', 'Luxury sofa set designed for contemporary living rooms.', 29999.00, 'Home & Living', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', 5, '2026-08-05 08:52:08'),
(29, 'Wooden Coffee Table', 'Elegant wooden coffee table for modern interiors.', 6999.00, 'Home & Living', 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600', 11, '2026-08-05 08:52:08'),
(30, 'Ceramic Vase Set', 'Beautiful decorative vase collection for home styling.', 1499.00, 'Home & Living', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600', 20, '2026-08-05 08:52:08'),
(31, 'Premium Bedsheet Set', 'Soft cotton bedsheet set with modern patterns.', 1299.00, 'Home & Living', 'https://images.unsplash.com/photo-1584100936595-c0654b55a228?w=600', 0, '2026-08-05 08:52:08'),
(32, 'Gaming Laptop', 'High performance laptop for work and entertainment.', 79999.00, 'Electronics', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600', 0, '2026-08-05 08:52:08'),
(33, 'Designer Sunglasses', 'UV protected stylish sunglasses collection.', 1999.00, 'Accessories', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600', 22, '2026-08-05 08:52:08'),
(34, 'Premium Cotton Hoodie', 'Soft fleece hoodie with comfortable fit for casual winter wear.', 1999.00, 'Men', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600', 25, '2026-08-05 08:53:44'),
(35, 'Slim Fit Denim Jeans', 'Classic blue denim jeans with modern slim fit design.', 2199.00, 'Men', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600', 32, '2026-08-05 08:53:44'),
(36, 'Formal Leather Shoes', 'Elegant leather shoes perfect for office and formal occasions.', 3499.00, 'Men', 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600', 14, '2026-08-05 08:53:44'),
(37, 'Women Party Wear Gown', 'Beautiful designer gown for weddings and special events.', 5999.00, 'Women', 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600', 9, '2026-08-05 08:53:44'),
(38, 'Women High Heels', 'Stylish heels with premium comfort and elegant design.', 2499.00, 'Women', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600', 17, '2026-08-05 08:53:44'),
(39, 'Ethnic Kurti Collection', 'Comfortable embroidered kurtis for festive and casual wear.', 1799.00, 'Women', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600', 20, '2026-08-05 08:53:44'),
(40, 'SPF 50 Sunscreen', 'Daily protection sunscreen suitable for all skin types.', 699.00, 'Beauty', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600', 35, '2026-08-05 08:53:44'),
(41, 'Premium Foundation', 'Long lasting lightweight foundation for flawless makeup.', 1299.00, 'Beauty', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600', 18, '2026-08-05 08:53:44'),
(42, 'Hair Care Kit', 'Complete hair care solution with shampoo and conditioner.', 999.00, 'Beauty', 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600', 22, '2026-08-05 08:53:44'),
(43, 'Android Tablet', 'Portable tablet with large display and powerful performance.', 18999.00, 'Electronics', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600', 10, '2026-08-05 08:53:44'),
(44, 'Smart Fitness Band', 'Fitness tracker with heart monitoring and activity tracking.', 1999.00, 'Electronics', 'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=600', 26, '2026-08-05 08:53:44'),
(45, 'Fast Charging Power Bank', '10000mAh power bank with fast charging support.', 1299.00, 'Electronics', 'https://images.unsplash.com/photo-1609592424835-7d8b4f0d4c7f?w=600', 30, '2026-08-05 08:53:44'),
(46, 'Leather Wallet', 'Premium leather wallet with multiple card slots.', 899.00, 'Accessories', 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600', 40, '2026-08-05 08:53:44'),
(47, 'Travel Backpack', 'Spacious backpack suitable for travel and office.', 1599.00, 'Accessories', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600', 21, '2026-08-05 08:53:44'),
(48, 'Jewellery Set', 'Elegant jewellery set for festive occasions.', 1999.00, 'Accessories', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600', 13, '2026-08-05 08:53:44'),
(49, 'Modern Dining Table', 'Stylish dining table set for contemporary homes.', 18999.00, 'Home & Living', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', 6, '2026-08-05 08:53:44'),
(50, 'Decorative Wall Mirror', 'Premium mirror design to enhance your interiors.', 2999.00, 'Home & Living', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600', 12, '2026-08-05 08:53:44'),
(51, 'Indoor Plant Decor', 'Beautiful artificial plants for home decoration.', 799.00, 'Home & Living', 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600', 28, '2026-08-05 08:53:44'),
(52, 'Luxury Curtain Set', 'Elegant curtains for modern living spaces.', 2499.00, 'Home & Living', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600', 0, '2026-08-05 08:53:44'),
(53, 'Kitchen Organizer Set', 'Smart storage solution for modern kitchens.', 1199.00, 'Home & Living', 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600', 15, '2026-08-05 08:53:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `address`, `created_at`) VALUES
(1, 'Anjali', 'anjali@gmail.com', '9876543210', '$2b$10$PIqt0DmrpjyZ1RR5JiU5NulXn9p9PzHwn4Vj45GLlHC.Q2v5u9tqS', 'Bareilly', '2026-08-02 05:56:37'),
(2, 'anjali', 'testuser01@gmail.com', '9876543210', '$2b$10$39yTRin8i5dz6rcSYFDuzOxHe4n3rm99mUYphZolravK29/QoE8XK', 'bareilly', '2026-08-04 06:39:02'),
(3, 'Anjali ', 'anjali123@gmail.com', '9876543210', '$2b$10$PBpT.FObQNEvfQRWuugKAuLnEsaNQGWvsLSVP3vMDTqa8h4l435p.', 'bareilly', '2026-08-05 00:15:02'),
(4, 'Rahul sharma', 'rahul@test.com', '9876543210', '$2b$10$HPmrCMh3XMMfBu/bNsBU0OtJza4cvkNsPQxFX2L9CZQzCGfRX1o/2', 'delhi', '2026-08-05 01:37:20');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `user_id`, `product_id`, `created_at`) VALUES
(2, 3, 35, '2026-08-06 02:14:33'),
(3, 3, 53, '2026-08-06 03:31:55'),
(4, 3, 39, '2026-08-06 03:32:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

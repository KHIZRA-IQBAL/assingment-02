import "./globals.css";



export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
     <html>
      <body  className= " bg-black text-slate-50 flex-grid  pl-4 pt-5">
      {children}
      </body>
      </html>
    
  );
}

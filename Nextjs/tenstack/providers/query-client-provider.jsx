"use client"
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { useState } from 'react';

// Create a client


export default function QueryclientProviderclient({children})
{
    const [queryClient]=useState(()=>new QueryClient());
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

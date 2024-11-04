import { useState } from 'react';
import { Message, OnboardingState, OnboardingFormData } from '../lib/types';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Send, Bot } from 'lucide-react';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { DocumentsForm } from './forms/DocumentsForm';
import { BankingInfoForm } from './forms/BankingInfoForm';
import { ReviewForm } from './forms/ReviewForm';

// Rest of the file remains exactly the same
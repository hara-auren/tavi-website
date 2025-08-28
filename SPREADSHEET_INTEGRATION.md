# Waitlist Spreadsheet Integration Guide

## Option 1: Manual Export from Supabase (Simplest)
1. Go to [Supabase Dashboard](https://app.supabase.com/project/wsnrnaerdgzrquavboaf/editor)
2. Navigate to **Table Editor** → **waitlist**
3. Click **Export** → **Download as CSV**
4. Open in Google Sheets or Excel

## Option 2: Automatic Google Sheets Sync with Zapier
1. Sign up for [Zapier](https://zapier.com) (free plan available)
2. Create a new Zap:
   - **Trigger**: Supabase - New Row in `waitlist` table
   - **Action**: Google Sheets - Create Spreadsheet Row
3. Connect your Supabase account using the database URL and service key
4. Connect your Google Sheets
5. Map the email field to your spreadsheet

## Option 3: Real-time Google Sheets Sync with Make (formerly Integromat)
1. Sign up for [Make](https://www.make.com) (free plan available)
2. Create a scenario:
   - Add Supabase webhook module
   - Add Google Sheets module
3. Configure to sync new waitlist entries

## Option 4: Direct Database View (For Technical Users)
Create a read-only database user and connect directly using:
- Google Sheets Database Connector
- Excel Power Query
- Any SQL client

## Option 5: Build a Simple Admin Dashboard
I can create a simple admin page that shows the waitlist with export functionality.
Would you like me to build this?

## Current Waitlist Access
Your waitlist is stored in Supabase at:
- Project: `wsnrnaerdgzrquavboaf`
- Table: `waitlist`
- URL: https://app.supabase.com/project/wsnrnaerdgzrquavboaf/editor/waitlist

You can view all signups there in real-time!
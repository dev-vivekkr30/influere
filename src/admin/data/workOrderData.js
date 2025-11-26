import { collaborationProfiles } from './collaborationProfilesData';

// Mock work order data for Incoming tab
// In a real app, this would come from an API or be filtered based on the selected profiles
export const incomingWorkOrders = [
  {
    id: 'wo-1233',
    orderNumber: '1233',
    profile: collaborationProfiles[0], // Suryoday Bank profile
  },
  {
    id: 'wo-1234',
    orderNumber: '1234',
    profile: collaborationProfiles[1], // Another Suryoday Bank profile
  },
];

// Mock work order data for Outgoing tab
export const outgoingWorkOrders = [
  {
    id: 'wo-out-1233',
    orderNumber: '1233',
    profile: collaborationProfiles[0], // Suryoday Bank profile
  },
  {
    id: 'wo-out-1234',
    orderNumber: '1234',
    profile: collaborationProfiles[1], // Another Suryoday Bank profile
  },
  {
    id: 'wo-out-1235',
    orderNumber: '1235',
    profile: collaborationProfiles[2], // Another Suryoday Bank profile
  },
];

// Helper function to create work orders from profile IDs
export const createWorkOrdersFromProfileIds = (profileIds, startOrderNumber = 1233) => {
  return profileIds
    .map((id, index) => {
      const profile = collaborationProfiles.find(p => p.id === id);
      if (!profile) return null;
      return {
        id: `wo-${id}`,
        orderNumber: `${startOrderNumber + index}`,
        profile,
      };
    })
    .filter(Boolean);
};


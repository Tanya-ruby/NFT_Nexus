export class LocationService {
    static options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  
    static async getCurrentPosition() {
      if (!navigator.geolocation) {
        throw new Error('Geolocation not supported in this browser');
      }
  
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, this.options);
        });
  
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        };
      } catch (error) {
        throw this.handleLocationError(error);
      }
    }
  
    static handleLocationError(error) {
      const errors = {
        1: 'Location access denied. Please enable location services.',
        2: 'Location unavailable. Please check your GPS.',
        3: 'Location request timed out. Please try again.'
      };
      return new Error(errors[error.code] || 'Failed to get location');
    }
  }
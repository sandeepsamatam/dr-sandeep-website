import { Document, Model, Schema, model, models } from "mongoose";

export type LeadPayload = {
  name: string;
  phone: string;
  problem: string;
  message?: string;
};

export interface LeadDocument extends LeadPayload, Document {
  createdAt: Date;
  updatedAt: Date;
}

const leadSchema = new Schema<LeadDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    problem: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      trim: true,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export const Lead: Model<LeadDocument> =
  (models.Lead as Model<LeadDocument> | undefined) || model<LeadDocument>("Lead", leadSchema);
